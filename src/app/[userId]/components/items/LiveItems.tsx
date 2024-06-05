const LiveItems = async ({ userId }: { userId: string }) => {
  return (
    <div>
      <p className='p-4 text-gray-500 text-center italic'>
        No items present in live list.
      </p>
    </div>
  );
};

export default LiveItems;
