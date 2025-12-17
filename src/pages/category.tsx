export default function Category() {
  const questions = [
    {
      id: 1,
      question: "Бийдаалт гэж юу вэ?",
      keyword: "бийдаалт",
      answer: "Бийдаалт гэдэг нь физикийн ойлголт юм.",
    },
    {
      id: 2,
      question: "Кинетик энерги гэж юу вэ?",
      keyword: "кинетик",
      answer: "Кинетик энерги нь хөдөлгөөнтэй биетийн энерги.",
    },
    {
      id: 3,
      question: "Даралт гэж юу вэ?",
      keyword: "даралт",
      answer: "Даралт гэдэг нь нэгж талбайд үйлчлэх хүч.",
    },
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border border-gray-200 text-sm rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2 text-left">#</th>
            <th className="border px-3 py-2 text-left">Асуулт</th>
            <th className="border px-3 py-2 text-left">Keyword</th>
            <th className="border px-3 py-2 text-left">Хариу</th>
            <th className="border px-3 py-2 text-center">Үйлдэл</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="border px-3 py-2">{index + 1}</td>
              <td className="border px-3 py-2">{item.question}</td>
              <td className="border px-3 py-2 text-blue-600">{item.keyword}</td>
              <td className="border px-3 py-2">{item.answer}</td>
              <td className="border px-3 py-2 text-center space-x-2">
                <button className="text-blue-600 hover:underline">Засах</button>
                <button className="text-red-600 hover:underline">Устгах</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
