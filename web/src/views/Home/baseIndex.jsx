import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GitHub,AddToHomeScreen,Link,Class } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const BaseIndex = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 136px)',
        backgroundImage: 'url(syzn.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        p: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container columns={9} wrap="nowrap" alignItems="flex-start" sx={{ minHeight: 'calc(100vh - 230px)', paddingTop: '3vh' }}>
          <Grid md={7} lg={6} sx={{ marginLeft: '-20%', marginTop: '8vh' }}>
            <Stack>
                <Typography variant="h1" sx={{ fontSize: '4rem', color: '#800080', lineHeight: 2.5 }}>
                深渊智能AIGC
              </Typography>
              <Typography variant="h4" sx={{ fontSize: '1.5rem', color: '#800080', lineHeight: 1.5, marginBottom: '5vh' }}>
                {t('description')}
              </Typography>
            </Stack>
            <Typography variant="h4" sx={{ fontSize: '1.4rem', color: '#800080', lineHeight: 1, marginBottom: '5vh' }}>
                {t('携手深渊智能AIGC，聚合多种模型，驶入前沿科技，让AI助你一臂之力！')}
            </Typography>
            
            <Stack spacing={3} direction="row" sx={{ marginTop: '30vh' }}>
              <Button
                startIcon={<Class />}
                variant="contained"
                href="https://www.yuque.com/shenyuanzhinengaigc/atz69s/uabc1f5yuyobqcus" target='_blank'
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
              >
                🎉 国内外AI大语言模型API价格对比
              </Button>
              <Button
                startIcon={<Class />}
                variant="contained"
                href="https://www.yuque.com/shenyuanzhinengaigc/atz69s/ct8fcuprx9cgf6a4" target='_blank'
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}>
                使用手册
              </Button>
              <Button
                startIcon={<AddToHomeScreen />}
                variant="contained"
                href="/login"
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
              >
                Let`s go 👉🏻
              </Button>
            </Stack>
            <br/><br/>
            <Stack spacing={3} direction="row">
              <Button
                  startIcon={<Class />}
                  variant="contained"
                  href="https://www.yuque.com/shenyuanzhinengaigc/atz69s/uwx2phtm700zboea" target='_blank'
                  sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
                >
                AI大模型全栈通识教程
              </Button>
              <Button
                  startIcon={<Link />}
                  variant="contained"
                  href="https://www.yuque.com/shenyuanzhinengaigc/atz69s/connectus" target='_blank'
                  sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
                >
                  联系我们
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BaseIndex;
