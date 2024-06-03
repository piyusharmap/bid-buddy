const UnauthorizedAccess = ({ message }: { message: string }) => {
  return (
    <div className='p-4'>
      <p className='p-4 text-center text-gray-500 italic'>{message}</p>
    </div>
  );
};

export default UnauthorizedAccess;
