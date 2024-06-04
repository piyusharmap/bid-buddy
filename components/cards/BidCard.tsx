import { formatToDollars } from '@/utils/currency';
import { formatBidTimestamp } from '@/utils/dateAndTime';

const BidCard = ({
  user,
  amount,
  timestamp,
}: {
  user: string;
  amount: string;
  timestamp: Date;
}) => {
  return (
    <div className='p-4 border border-gray-500/15 rounded-lg space-y-2'>
      <h2 className='font-medium text-3xl'>
        ${formatToDollars(parseInt(amount))}{' '}
      </h2>
      <div className='flex items-end justify-between'>
        <p className='font-light'>
          by <span className='font-semibold'>Jake Peralta</span>
        </p>
        {/* <p className='text-sm text-gray-500'>{formatBidTimestamp(timestamp)}</p> */}
      </div>
    </div>
  );
};

export default BidCard;
