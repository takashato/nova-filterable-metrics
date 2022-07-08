import FilterModal from './components/FilterModal.vue';
import DateTimePicker from './components/DateTimePicker.vue';
import FilterableValueMetric from './components/DateTimePicker.vue';
import FilterableTrendMetric from './components/FilterableTrendMetric.vue';
import FilterablePartitionMetric from './components/FilterablePartitionMetric.vue';

Nova.booting((app, store) => {
    app.component('filterable-modal', FilterModal);
    app.component('date-time-picker', DateTimePicker);
    app.component('filterable-value-metric', FilterableValueMetric);
    app.component('filterable-trend-metric', FilterableTrendMetric);
    app.component('filterable-partition-metric', FilterablePartitionMetric);
})
