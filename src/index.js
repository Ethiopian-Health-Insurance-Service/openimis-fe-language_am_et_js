import messages_am_et from "./translations/am_et.json";
import flatten from "flat";

const DEFAULT_CONFIG = {
  "translations": [{ key: "am_et", messages: flatten(messages_am_et) }],
}

export const LanguageAmEtModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}