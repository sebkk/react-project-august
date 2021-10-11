import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    background-color: #555868;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Text = styled.h1`

`

const SuccessLogin = () => {

    return (
        <Container>
            <Text>
                Brawo, zalogowałeś się!
            </Text>
        </Container>
    )

}

export default SuccessLogin