<script setup>
import { ref, computed } from 'vue'
import toRegexRange from 'to-regex-range'

const min = ref(null)
const max = ref(null)

const result = computed(() => {
  if (min.value === null || max.value === null || min.value === '' || max.value === '') {
    return { error: '구간을 입력해주세요.' }
  }
  if (min.value < 0 || max.value < 0) {
    return { error: '자연수(0 포함)를 입력해주세요.' }
  }
  if (min.value > max.value) {
    return { error: '시작 숫자가 끝 숫자보다 클 수 없습니다.' }
  }

  const pattern = toRegexRange(min.value, max.value, {
    relaxZeros: false,
    shorthand: false,
    capture: true
  });
  return { pattern: pattern }
})

const copy = () => {
  if (result.value.pattern) {
    navigator.clipboard.writeText(result.value.pattern)
  }
}
</script>

<template>
  <div class="regex-tool">
    <div class="input-container">
      <div class="input-box">
        <label>시작</label>
        <input type="number" v-model.number="min" placeholder="0" />
      </div>
      <div class="arrow">→</div>
      <div class="input-box">
        <label>끝</label>
        <input type="number" v-model.number="max" placeholder="100" />
      </div>
    </div>

    <div class="output-container">
      <div v-if="result.error" class="status-msg error">
        <span class="dot"></span> {{ result.error }}
      </div>
      <div v-else class="status-msg success">
        <div class="code-wrapper">
          <code>{{ result.pattern }}</code>
        </div>
        <button class="copy-btn" @click="copy">복사</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.regex-tool {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.25rem;
  margin: 1rem 0;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.input-box {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.input-box label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}

.input-box input {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  width: 120px;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
}

.arrow {
  padding-top: 1.7rem;
  color: var(--vp-c-text-3);
  font-weight: bold;
}

.status-msg {
  display: flex;
  align-items: center;
  min-height: 3rem;
  padding: 0 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.status-msg.error {
  background: var(--vp-c-danger-soft);
  color: var(--vp-c-danger-1);
  border: 1px solid var(--vp-c-danger-soft);
}

.status-msg.success {
  background: var(--vp-c-default-soft);
  border: 1px solid var(--vp-c-divider);
  justify-content: space-between;
  gap: 1rem;
}

.code-wrapper {
  overflow-x: auto;
  white-space: nowrap;
  flex: 1;
}

code {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  font-family: var(--vp-font-family-mono);
}

.copy-btn {
  background: var(--vp-c-brand-1);
  color: black;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: var(--vp-c-brand-2);
}

.dot {
  width: 6px;
  height: 6px;
  background: currentColor;
  border-radius: 50%;
  margin-right: 10px;
}
</style>