import type { ModuleProps } from "../types/types";

const Module = (module: ModuleProps) => {
  return (
    <tr>
      <td>{module.name}</td>
      <td>{module.noLectures}</td>
      <td>{module.noPracticals}</td>
    </tr>
  );
};

export { Module };
