import { Module } from "./module";
import type { ProgrammeProps } from "../types/types";

const Programme = ({ title, modules }: ProgrammeProps) => {
  const list = modules.map((module, index) => (
    <Module key={index} {...module} />
  ));

  return (
    <>
      <h2>{`${title} Modules Table`}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No. of Lectures</th>
            <th>No. of Practicals</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};

export { Programme };
