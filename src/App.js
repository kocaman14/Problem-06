// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <span className='wrapper flex space-x-2'>
      <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
        Create
      </button>
      <button className='bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700'>
        Update
      </button>
      <button className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700'>
        Delete
      </button>
    </span>
  )
}