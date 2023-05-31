import React, { useMemo } from "react";
import { useAuth } from "../../hooks/auth";

const Users = React.memo(({ filters }) => {
  const { userName } = useAuth();

  const fetchdata = useMemo(() => {
    // Vamos a la api, traemos datos y los cacheamos con useMemo
  }, [filters]);

  return (
    <div>
      <h2>Users</h2>
      {userName}
    </div>
  );
});

export { Users };
