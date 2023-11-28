import { useState } from 'react';

const useResponseId = () => {
  const [responseId, setResponseId] = useState(null);

  const updateResponseId = (newId) => {
    setResponseId(newId);
  };

  return { responseId, updateResponseId };
};

export default useResponseId;
