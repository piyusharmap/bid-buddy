import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Bids = async ({ userId }: { userId: string }) => {
  return (
    <div>
      <Tabs defaultValue='live' className='flex flex-col'>
        <TabsList className='self-end'>
          <TabsTrigger value='live' className='px-5 font-medium'>
            Live
          </TabsTrigger>

          <TabsTrigger value='past' className='px-5 font-medium'>
            Past
          </TabsTrigger>
        </TabsList>

        <TabsContent value='live'></TabsContent>

        <TabsContent value='past'></TabsContent>
      </Tabs>
    </div>
  );
};

export default Bids;
