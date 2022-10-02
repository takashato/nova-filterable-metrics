<template>
  <LoadingCard :loading="loading" class="px-6 py-4">
    <div class="h-6 flex items-center mb-4">
      <h3 class="mr-3 leading-tight text-sm font-bold">{{ title }}</h3>

      <HelpTextTooltip :text="helpText" :width="helpWidth" />

      <button class="ml-auto text-80 btn btn-white" v-if="filters.length > 0" @click="openModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 20 20"
          aria-labelledby="filter"
          role="presentation"
          class="fill-current text-80"
        >
          <path
            fill-rule="nonzero"
            d="M.293 5.707A1 1 0 0 1 0 4.999V1A1 1 0 0 1 1 0h18a1 1 0 0 1 1 1v4a1 1 0 0 1-.293.707L13 12.413v2.585a1 1 0 0 1-.293.708l-4 4c-.63.629-1.707.183-1.707-.708v-6.585L.293 5.707zM2 2v2.585l6.707 6.707a1 1 0 0 1 .293.707v4.585l2-2V12a1 1 0 0 1 .293-.707L18 4.585V2H2z"
          />
        </svg>
      </button>
    </div>

    <div class="flex items-center mb-4">
      <div
        v-if="icon"
        class="rounded-lg bg-primary-500 text-white h-14 w-14 flex items-center justify-center"
      >
        <Icon :type="icon" width="24" height="24" />
      </div>

      <div :class="{ 'ml-4': icon }">
        <p class="flex items-center text-4xl">
          {{ formattedValue }}
          <span v-if="suffix" class="ml-2 text-sm font-bold">{{
              formattedSuffix
            }}</span>
        </p>

        <div>
          <p class="flex items-center font-bold text-sm">
            <svg
              v-if="increaseOrDecreaseLabel == 'Decrease'"
              xmlns="http://www.w3.org/2000/svg"
              class="text-red-500 stroke-current mr-2"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>
            <svg
              v-if="increaseOrDecreaseLabel == 'Increase'"
              class="text-green-500 stroke-current mr-2"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span v-if="increaseOrDecrease != 0">
              <span v-if="growthPercentage !== 0">
                {{ growthPercentage }}%
                {{ __(increaseOrDecreaseLabel) }}
              </span>

              <span v-else>{{ __('No Increase') }}</span>
            </span>

            <span class="text-gray-400 font-semibold" v-else>
              <span v-if="previous == '0' && value != '0'">
                {{ __('No Prior Data') }}
              </span>

              <span v-if="value == '0' && previous != '0' && !zeroResult">
                {{ __('No Current Data') }}
              </span>

              <span v-if="value == '0' && previous == '0' && !zeroResult">
                {{ __('No Data') }}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <filterable-modal
      v-if="modalOpen"
      :selected-range-key="selectedRangeKey"
      :selected-filters="selectedFilters"
      :title="title"
      :open="modalOpen"
      :ranges="ranges"
      :filters="filters"
      @selected="selected"
      @closeModal="closeModal"
    />
  </LoadingCard>
</template>
<script>
import ValueMetric from "@/components/Metrics/Base/BaseValueMetric.vue";

export default {
  extends: ValueMetric,
  mixins: [require("../base"), require("./../modal")],
};
</script>
