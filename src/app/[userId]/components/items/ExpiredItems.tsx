import ItemCard from '@/components/cards/itemCard';

import { getExpiredItemsAction } from './actions';

const ExpiredItems = async ({ userId }: { userId: string }) => {
  const expiredItemsList = await getExpiredItemsAction(userId);

  const hasItems = expiredItemsList.length > 0;

  return (
    <div>
      <div>
        {hasItems ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {expiredItemsList.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                startingPrice={item.startingPrice}
                bidInterval={item.bidInterval}
                endDate={item.endDate}
                createdOn={item.createdOn}
                isExpired
                className='col-span-1'
              />
            ))}
          </div>
        ) : (
          <p className='p-4 text-gray-500 text-center italic'>
            No items present in expired list.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpiredItems;
