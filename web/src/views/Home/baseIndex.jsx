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
        //backgroundImage: 'linear-gradient(to right, #000, #6a00ff)',
        backgroundImage: 'linear-gradient(to right, #1c1c1c, #6a00ff, #87ceeb)',
        //backgroundImage: 'linear-gradient(to right, #8a2be2, #6a00ff, #1e90ff)',
        color: 'white',
        p: 4
      }}
    >
      <Container maxWidth="lg">
        <Grid container columns={9} wrap="nowrap" alignItems="center" sx={{ minHeight: 'calc(100vh - 230px)' }}>
          <Grid md={7} lg={6}>
            <Stack>
                <Typography variant="h1" sx={{ fontSize: '4rem', color: '#fff', lineHeight: 1.5 }}>
                领航 AGI
              </Typography>
              <Typography variant="h4" sx={{ fontSize: '1.5rem', color: '#fff', lineHeight: 1.5 }}>
                {t('description')}
              </Typography>
            </Stack>
            <br></br>
            <Grid container columns={12} justifyContent="flex-end">
              <Typography sx={{ fontSize: '1.1rem', color: '#', lineHeight: 1.5 }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li>1、便捷的 apikey 管理，透明的用量仪表盘</li>
                  <li>2、支持 OpenAI、Claude、Gemini、文心一言、通义千问、智谱GLM、讯飞星火等众多大语言模型</li>
                  <li>3、支持 Midjourney 绘画、Suno 音乐、AI视频 等众多多模态模型</li>
                  <li>4、集成了多款主流 AI 工具，总有一款适合你！</li>
                  <li>5、支持多种登录方式，安全、稳定、可靠！</li>
                </ul>
              </Typography>
            </Grid>
            <br></br>
            <Stack spacing={3} direction="row">
              <Button
                startIcon={<Link />}
                variant="contained"
                href="https://www.yuque.com/lhyyh/ai/conactus" target='_blank'
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
              >
                联系我们
              </Button>
              <Button
                startIcon={<Class />}
                variant="contained"
                href="https://www.yuque.com/lhyyh/agi/introduce" target='_blank'
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
              >
                AI大模型全栈通识教程
              </Button>
              <Button
                startIcon={<Class />}
                variant="contained"
                href="https://www.yuque.com/lhyyh/ai/tool" target='_blank'
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
              >
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BaseIndex;
