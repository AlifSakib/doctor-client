const { useState, useEffect } = require("react");

const useAdmin = (email) => {
  const [isAdmin, setIsAdim] = useState("");
  const [isAdminLoading, setIsAdminLoding] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdim(data.isAdmin);
          setIsAdminLoding(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
