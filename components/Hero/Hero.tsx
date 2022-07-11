import { PhoneOutlined } from '@ant-design/icons';
import { Button, Col, Grid, Row, Tooltip, Typography } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Hero.module.less';

const { Title, Paragraph, Text } = Typography;

const { useBreakpoint } = Grid;

const Hero = () => {
  const [
    isCopiedToClipboardTooltipVisible,
    setIsCopiedToClipboardTooltipVisible,
  ] = useState(false);

  const breakpoint = useBreakpoint();

  const phoneNumber = '+00 123 456 789 ';

  const handlePhoneNumberButtonClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    setIsCopiedToClipboardTooltipVisible(true);
    setTimeout(() => setIsCopiedToClipboardTooltipVisible(false), 1000);
  };

  return (
    <div className={styles.hero}>
      <Image
        src='/garden.jpg'
        layout='fill'
        objectFit='cover'
        objectPosition='left'
      />
      <Row className={styles.heroContent} justify='center' align='middle'>
        <Col xs={22} md={20} lg={18} xl={16}>
          <div className={styles.heroCard}>
            <Title className={styles.heroCardTitle}>Company name</Title>
            <Text className={styles.heroCardSubtitle}>Lawn &amp; order</Text>
            <Paragraph>
              <Tooltip
                placement={breakpoint.xs ? 'bottom' : 'right'}
                title='Copied'
                visible={isCopiedToClipboardTooltipVisible}
              >
                <Button
                  className={styles.heroCardPhoneNumberButtonWrapper}
                  type='primary'
                  size={breakpoint.xs ? 'middle' : 'large'}
                  icon={<PhoneOutlined />}
                  onClick={handlePhoneNumberButtonClick}
                >
                  {phoneNumber}
                </Button>
              </Tooltip>
            </Paragraph>
          </div>
        </Col>
      </Row>
      <a className={styles.link} href='https://www.freepik.com/photos/woman'>
        Woman photo created by cookie_studio - www.freepik.com
      </a>
    </div>
  );
};

export default Hero;
