import ItemCard from '@/components/cards/ItemCard';

import { getUserItemsAction } from './actions';

const AvailableItems = async ({ userId }: { userId: string }) => {
  const myItemsList = await getUserItemsAction(userId);

  const hasItems = myItemsList.length > 0;

  return (
    <div>
      {hasItems ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {myItemsList.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              startingPrice={item.startingPrice}
              className='col-span-1'
            />
          ))}
        </div>
      ) : (
        <p className='p-4 text-gray-500 text-center italic'>
          No items in your list
        </p>
      )}
    </div>
  );
};

export default AvailableItems;
