import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import AvailableItems from './AvailableItems';
import ExpiredItems from './ExpiredItems';
import LiveItems from './LiveItems';

const Items = async ({ userId }: { userId: string }) => {
  return (
    <div>
      <Tabs defaultValue='available' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='available' className='px-5 font-medium'>
            Available
          </TabsTrigger>

          <TabsTrigger value='live' className='px-5 font-medium'>
            Live
          </TabsTrigger>

          <TabsTrigger value='expired' className='px-5 font-medium'>
            Expired
          </TabsTrigger>
        </TabsList>

        <TabsContent value='available'>
          <AvailableItems userId={userId} />
        </TabsContent>

        <TabsContent value='live'>
          <LiveItems userId={userId} />
        </TabsContent>

        <TabsContent value='expired'>
          <ExpiredItems userId={userId} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Items;
