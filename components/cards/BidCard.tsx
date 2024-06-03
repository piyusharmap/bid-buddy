import { formatBidTimestamp } from '@/utils/dateAndTime';

const BidCard = ({
  user,
  bidAmount,
  timestamp,
}: {
  user: string;
  bidAmount: string;
  timestamp: Date;
}) => {
  return (
    <div className='p-4 border border-gray-500/15 rounded-lg space-y-2'>
      <h2 className='font-medium text-3xl'>{bidAmount} </h2>
      <div className='flex items-end justify-between'>
        <p className='font-light'>
          by <span className='font-semibold'>{user}</span>
        </p>
        <p className='text-sm text-gray-500'>{formatBidTimestamp(timestamp)}</p>
      </div>
    </div>
  );
};

export default BidCard;
