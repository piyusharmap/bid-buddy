import { formatToDollars } from '@/utils/currency';
import { formatBidTimestamp } from '@/utils/dateAndTime';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import UserInfoCard from './userInfoCard';

const BidCard = ({
  userId,
  amount,
  timestamp,
}: {
  userId: string;
  amount: string;
  timestamp: Date;
}) => {
  return (
    <div className='p-4 border border-gray-500/15 rounded-lg space-y-2'>
      <div className='flex items-end gap-1'>
        <HoverCard>
          <HoverCardTrigger className='cursor-pointer'>
            Jake Peralta
          </HoverCardTrigger>

          <HoverCardContent className='flex items-center justify-center gap-2'>
            <UserInfoCard userId={userId} />
          </HoverCardContent>
        </HoverCard>

        <p className='text-sm font-light text-gray-500'>placed bid of</p>
      </div>

      <div className='flex justify-between items-end'>
        <h1 className='text-3xl'>${formatToDollars(parseInt(amount))} </h1>

        <p className='text-sm text-gray-500'>
          {formatBidTimestamp(new Date())}
        </p>
      </div>
    </div>
  );
};

export default BidCard;
