import { formatDistance } from 'date-fns';

export function formatBidTimestamp(timestamp: Date) {
  return formatDistance(timestamp, new Date(), {
    addSuffix: true,
    includeSeconds: true,
  });
}
