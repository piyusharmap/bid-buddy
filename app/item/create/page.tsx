import NewItemForm from '@/components/forms/newItemForm';

const CreateItem = async () => {
  return (
    <div className='max-w-7xl mx-auto px-5 py-4 space-y-6'>
      <NewItemForm />
    </div>
  );
};

export default CreateItem;
