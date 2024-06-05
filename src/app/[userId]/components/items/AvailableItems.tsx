import ItemCard from '@/components/cards/itemCard';

import { getAvailableItemsAction } from './actions';

const AvailableItems = async ({ userId }: { userId: string }) => {
  const availableItemsList = await getAvailableItemsAction(userId);

  const hasItems = availableItemsList.length > 0;

  return (
    <div>
      {hasItems ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {availableItemsList.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              startingPrice={item.startingPrice}
              bidInterval={item.bidInterval}
              endDate={item.endDate}
              createdOn={item.createdOn}
              className='col-span-1'
            />
          ))}
        </div>
      ) : (
        <p className='p-4 text-gray-500 text-center italic'>
          No items present in available list.
        </p>
      )}
    </div>
  );
};

export default AvailableItems;
