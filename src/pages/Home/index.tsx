import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate("/upload-files")}
      >
        Go to Upload Files Page
      </Button>
    </div>
  );
};

export default Home;
