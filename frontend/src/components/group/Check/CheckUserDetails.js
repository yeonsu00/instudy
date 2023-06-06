import {Box, Typography, Button, TextField, Autocomplete, Checkbox, InputLabel, Select, MenuItem} from "@mui/material";
import {MDBCard, MDBCardBody} from "mdb-react-ui-kit";
import GroupUserList from "./GroupUserList";
import * as React from "react";
import CheckTodoList from "./CheckTodoList";
import CheckCard from "./CheckCard";
import CheckProgress from "./CheckProgress";
import {useState, useEffect} from "react";
import axios from "axios";
import MemoView from "./Comment/MemoView";
import CheckCreate from "./CheckCreate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import GroupFilterModal from "../finder/GroupFilterModal";
import CheckModal from "./CheckModal";
import {tags} from "../../../assets/tag/tags";
import FormControl from "@mui/material/FormControl";
import {useNavigate} from "react-router-dom";

const CheckUserDetails = (props) => {
    const {clickedNum, todos, loginUser, groupId} = props;

    // console.log("todos", todos);

    const handleButtonClick = () => {
        // Handle button click logic here
    };

    const [goodCount, setGoodCount] = useState(0);
    const [badCount, setBadCount] = useState(0);

    const totalCount = goodCount - badCount;

    console.log("groupId", groupId)

    const [checkingId, setCheckingId] = useState(0);

    const navigate = useNavigate();

    const handleCreateChecking = async () => {
        try {
            const response = await axios.post("/checking/create", {
                userId: loginUser.userId,
                groupId: groupId,
                content: "This is a content",
            });
            const newChecking = response.data;
            console.log("Created Checking:", newChecking);

            navigate(`/check/${groupId}/${clickedNum}`); // Redirect to the new URL
        } catch (error) {
            console.error("Error:", error);
            // Handle error case
        }
    };

    const [groupUsers, setGroupUsers] = useState([]);

    useEffect(() => {
        const fetchGroupUsers = async () => {
            try {
                const response = await axios.post(`/checking/read/groupUser`, {
                    groupId: groupId,
                });
                console.log("response.data", response.data);
                setGroupUsers(response.data);
            } catch (error) {
                console.error("Error fetching group users:", error);
            }
        };

        fetchGroupUsers();
    }, [groupId]);

    console.log("여기서 clickedNum", clickedNum)


    return (
        <>
            <MDBCard className="mb-5">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="10vh"
                >
                    <Typography variant="h5" gutterBottom>
                        {clickedNum}의 Todo
                    </Typography>
                </Box>
                <MDBCardBody>
                    <CheckTodoList clickedNum={clickedNum}/>
                    {/*<MemoView loginUser={loginUser}*/}

                    {/*    checkingId={checkingId}*/}
                    {/*/>*/}
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="10vh"
                    >
                        <Button
                            variant="contained"
                            onClick={handleCreateChecking}
                        >
                            인증하기
                        </Button>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="10vh"
                    >
                        {/*<CheckProgress groupId={groupId}/>*/}

                    </Box>

                </MDBCardBody>
            </MDBCard>
        </>
    );
};

export default CheckUserDetails;