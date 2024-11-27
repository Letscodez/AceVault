import Sort from "@/components/sort";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import React from "react";

const page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const files = await getFiles();
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Total:
            <span className="h5"> 0 MB</span>
          </p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-gray-400">Sort By</p>
            <Sort />
          </div>
        </div>
      </section>

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file : Models.Document) => (
            <div key={file.$id} className="file-card">
              <div className="file-card-header">
                <p className="h5">{file.name}</p>
              </div>
              <div className="file-card-footer">
                <p className="body-1">{file.size} MB</p>
                <button className="btn">Download</button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <p className="empty-list">No files found</p>
      )}
    </div>
  );
};

export default page;
