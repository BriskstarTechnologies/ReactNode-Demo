// @mui
import {
    Box,
    Stack,
    Container,
    Typography
} from '@mui/material';
// hooks
// components
import Page from '../../components/Page';
// ----------------------------------------------------------------------

export default function ThankYou() {
    return (
        <Page
            title="Thank You"
        >
            <Container
                maxWidth='sm'
                sx={{
                    bgcolor: '#FFFFFF',
                    margin: '24px auto',
                    borderRadius: '16px',
                }}
            >
                <Box
                    sx={{
                        maxWidth: 480,
                        mx: 'auto'
                    }}
                >
                    <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                        Logo
                    </Stack>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" gutterBottom>
                            Thank You For Sign Up
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Page>
    );
}
