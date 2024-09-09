export const PlayListItem = ({ title, artist, length, isPlaying }) => {
  return (
    <li
      className={`flex justify-between ${isPlaying ? 'bg-gray-200' : 'bg-white'}bg-secondary rounded-lg`}
    >
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>
        <p className="text-sm text-gray-500">{length}</p>
    </li>
  );
};
