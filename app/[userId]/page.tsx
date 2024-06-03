import ProfileCard from '@/components/cards/ProfileCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import EmptyUserState from './EmptyState';
import { getUserAction } from './actions';
import Bids from './components/bids/Bids';
import Items from './components/items/Items';

const Profile = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const user = await getUserAction(userId);

  return (
    <div className='max-w-7xl mx-auto px-5 pt-6'>
      {!user ? (
        <EmptyUserState />
      ) : (
        <>
          <ProfileCard
            name={user.name}
            email={user.email}
            imageSrc={user.image}
          />

          <Tabs defaultValue='items' className='mt-6 space-y-4'>
            <div className='flex justify-end'>
              <TabsList>
                <TabsTrigger value='items' className='px-5 font-medium'>
                  Items
                </TabsTrigger>

                <TabsTrigger value='bids' className='px-5 font-medium'>
                  Bids
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='items' className='space-y-2'>
              <h2 className='font-medium text-xl'>My Items</h2>

              <Items userId={userId} />
            </TabsContent>

            <TabsContent value='bids' className='space-y-2'>
              <h2 className='font-medium text-xl'>My Bids</h2>

              <Bids userId={userId} />
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default Profile;
