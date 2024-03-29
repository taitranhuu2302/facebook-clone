import React, { useEffect } from 'react';
import { Box, Container, Grid, Link } from "@mui/material";
import ProfileLayout from "../../layouts/ProfileLayout";
import ProfileIntroduce from "../../components/Profile/ProfileIntroduce";
import ProfilePost from "../../components/Profile/ProfilePost";
import ProfilePhoto from "../../components/Profile/ProfilePhoto";
import ProfileFriend from "../../components/Profile/ProfileFriend";
import styled from "@emotion/styled";
import { useGetPostsByMeMutation } from "../../app/services/PostService";
import { useAppSelector } from "../../app/hook";



const ProfilePage = () => {
    const [getPostMeApi, { isLoading }] = useGetPostsByMeMutation();
    const { userCurrent } = useAppSelector(state => state.userSlice);
    const {friends} = useAppSelector(state => state.friendSlice);

    useEffect(() => {
        if (userCurrent.email) {
            getPostMeApi(userCurrent.email);
        }
    }, [getPostMeApi, userCurrent.email]);

    return (
        <ProfileLayout>
            <Box>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item xs={5}>
                            <ProfileIntroduce />
                            <ProfilePhoto />
                            {friends.length > 0 && <ProfileFriend />}
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '10px',
                                padding: '5px'
                            }}>
                                <Link href="/" sx={{ textDecoration: 'none' }}><Text>Quyền riêng tư</Text></Link>
                                <Link href="/" sx={{ textDecoration: 'none' }}><Text>Điều khoản</Text></Link>
                                <Link href="/" sx={{ textDecoration: 'none' }}><Text>Quảng cáo</Text></Link>
                                <Link href="/" sx={{ textDecoration: 'none' }}><Text>Lựa chọn quảng cáo</Text></Link>
                                <Link href="/" sx={{ textDecoration: 'none' }}><Text>Cookie</Text></Link>
                                <Link href="/" sx={{ textDecoration: 'none' }}><Text>Xem thêm</Text></Link>

                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '5px'
                            }}>
                                <Link href="/" sx={{ textDecoration: 'none' }}><Text>Meta © 2022</Text></Link>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <ProfilePost isLoading={isLoading} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ProfileLayout>
    )
}

const Text = styled(Box)`
  width: 100%;
  color: #65676B;
  font-size: .75rem;
  line-height: 1.2308;
`


export default ProfilePage;