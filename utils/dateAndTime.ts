import { format, formatDistance } from 'date-fns';

export function formatBidTimestamp(timestamp: Date) {
  return formatDistance(timestamp, new Date(), {
    addSuffix: true,
    includeSeconds: true,
  });
}

export function formatDate(date: Date) {
  return format(date, 'MMMM d, yyyy');
}
