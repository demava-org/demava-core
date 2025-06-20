export default function Proposals() {
  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Community Proposals</h2>
      <p className="text-gray-600 mb-6">Here you'll find a list of proposals created by the community. Review, discuss, and vote!</p>
      <div className="border-t pt-4">
        <div className="bg-white p-4 shadow rounded mb-4">
          <h3 className="text-xl font-semibold text-green-800">Example Proposal Title</h3>
          <p className="text-gray-600 text-sm mt-1">Proposed by: Alice | Domain: Environment | Layer: 2</p>
          <p className="mt-2 text-gray-700">This proposal suggests launching a green initiative to reduce plastic usage in local communities...</p>
        </div>
      </div>
    </div>
  );
}
