import NewItemForm from '@/components/forms/newItemForm';

const CreateItem = async () => {
  return (
    <div className='max-w-7xl mx-auto px-5 pt-6'>
      <h1 className='mb-4 font-medium text-2xl'>Create Item</h1>

      <NewItemForm />
    </div>
  );
};

export default CreateItem;
