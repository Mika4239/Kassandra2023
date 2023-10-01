interface GroupObject {
  [key: string]: any[];
}

export interface NumberData {
  team: string;
  number: number;
}

export const groupBy = (input: any[], key: string): GroupObject => {
  const inputList = [...input];
  return inputList.reduce((acc, currentValue) => {
    const groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
};

export const getAvgForGroup = (
  groupedData: GroupObject,
  key: string
): NumberData[] => {
  return Object.keys(groupedData).map((group) => {
    const valuesByKey = groupedData[group].map((data) =>
      key.split(".").reduce((p, c) => p && p[c], data)
    );
    const avg = valuesByKey.reduce((a, b) => a + b, 0) / valuesByKey.length;
    return { team: group, number: avg };
  });
};

export const getCountForGroup = (
  groupedData: GroupObject,
  key: string
): NumberData[] => {
  const keyPath = key.split(".");
  const countValue = keyPath.pop();
  return Object.keys(groupedData).map((group) => {
    const valuesByKey = groupedData[group].map((data) =>
      keyPath.reduce((p, c) => p && p[c], data)
    );
    const countAvg: number =
      valuesByKey.filter((value) => value == countValue).length /
      valuesByKey.length;
    return { team: group, number: countAvg };
  });
};

export const getNestedKeys = (data: Object, keys: string[], keyString: string) => {
  if (typeof data == "object") {
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof Object];
      if (typeof value === "object") {
        getNestedKeys(value, keys, keyString + key + ".");
      } else {
        keys.push(keyString + key);
      }
    });
  }
  return keys;
};
