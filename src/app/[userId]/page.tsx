import ProfileCard from '@/components/cards/profileCard';
import Container from '@/components/layout/container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getUser } from '@/data-access/user';

import EmptyUserState from './EmptyState';
import Bids from './components/bids/Bids';
import Items from './components/items/Items';

const Profile = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const user = await getUser(userId);

  if (!user) {
    return (
      <Container>
        <EmptyUserState />
      </Container>
    );
  }

  const userInfo = {
    name: user.name,
    email: user.email,
    imageSrc: user.image,
  };

  return (
    <Container>
      <ProfileCard {...userInfo} />

      <Tabs defaultValue='items' className='mt-6 space-y-4'>
        <TabsList>
          <TabsTrigger value='items' className='px-5 font-medium'>
            Items
          </TabsTrigger>

          <TabsTrigger value='bids' className='px-5 font-medium'>
            Bids
          </TabsTrigger>
        </TabsList>

        <TabsContent value='items' className='space-y-4'>
          <h2 className='ml-1 text-xl'>My Items</h2>

          <Items userId={userId} />
        </TabsContent>

        <TabsContent value='bids' className='space-y-4'>
          <h2 className='ml-1 text-xl'>My Bids</h2>

          <Bids userId={userId} />
        </TabsContent>
      </Tabs>
    </Container>
  );
};

export default Profile;
