import * as coreOperators from "rxjs/operators";

export * from "rxjs/operators";
import { loader } from "./loader";

export * from "./loader";

const rxjsOperators = {
  ...coreOperators,
  loader,
};

export default rxjsOperators;
