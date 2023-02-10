import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import DetailsModal from "./DetailsModal";

const PostsManagement = () => {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let json = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(json?.data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      let countPage = 0;
      let tempArray = [];
      if (data.length % 10) {
        countPage = Math.floor(data.length / 10) + 1;
      } else {
        countPage = data.length / 10;
      }
      for (let i = 0; i < countPage; i++) {
        tempArray.push({ page: i, start: i * 10, endTotal: i * 10 + 9 });
      }
      setTotalPage(tempArray);
    }
  }, [data]);

  useEffect(() => {
    if (totalPage) {
      const temp = totalPage.find((item) => item.page === page);
      if (page === 0) {
        temp && setDataTable(data.slice(0, 9));
      } else {
        temp && setDataTable(data.slice(temp.start, temp.endTotal));
      }
    }
  }, [page, totalPage]);

  return (
    <div>
      <table className="w-full">
        <tr>
          <th className="border border-gray-200 text-left p-2">ID</th>
          <th className="border border-gray-200 text-left p-2">User ID</th>
          <th className="border border-gray-200 text-left p-2">Title</th>
          <th className="border border-gray-200 text-left p-2">Action</th>
        </tr>
        {dataTable.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-200 text-left p-2">
              {item?.userId}
            </td>
            <td className="border border-gray-200 text-left p-2">{item?.id}</td>
            <td className="border border-gray-200 text-left p-2">
              {item?.title}
            </td>
            <td
              className="border border-gray-200 text-left p-2 cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setDetailData({
                  id: item?.id,
                  userId: item?.userId,
                  title: item?.title,
                  body: item?.body,
                });
              }}
            >
              open
            </td>
          </tr>
        ))}
      </table>
      <div className="flex justify-center mt-6">
        {totalPage.map((item, index) => (
          <span
            key={index}
            className={clsx(
              "border border-gray-900 px-2 cursor-pointer hover:text-cyan-500 hover:border-cyan-500 ",
              { "text-cyan-500 border-cyan-500": page === item?.page }
            )}
            onClick={() => setPage(item?.page)}
          >
            {item?.page}
          </span>
        ))}
      </div>
      <DetailsModal
        data={detailData}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default PostsManagement;
