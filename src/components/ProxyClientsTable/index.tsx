import React from 'react';
import { FaApple, FaGithub, FaWindows } from 'react-icons/fa';
import styles from './styles.module.css';
// @ts-ignore
import VproxyIcon from '@site/static/img/vproxy.png';
interface ProxyClient {
  name: string;
  icon: React.ReactNode;
  platforms: string[];
  price: string;
  openSource: React.ReactNode;
  websiteUrl?: string;
  description?: string;
}
const OpenSourceBadge: React.FC = () => {
  return (
    <div className={styles.openSourceContainer}>
      <span className={styles.openSource}>开源</span>
    </div>
  );
};

const ClosedSourceBadge: React.FC = () => {
  return (
    <div className={styles.openSourceContainer}>
      <span className={styles.closedSource}>闭源</span>
    </div>
  );
};

const PartOpenSourceBadge: React.FC = () => {
  return (
    <div className={styles.openSourceContainer}>
      <span className={styles.partOpenSource}>部分开源</span>
    </div>
  );
};

// const UIOpenSourceBadge: React.FC = () => {
//   return (
//     <div className={styles.openSourceContainer}>
//       <span className={styles.uiOpenSource}>UI开源</span>
//     </div>
//   );
// };

const proxyClients: ProxyClient[] = [
  {
    name: 'Vproxy',
    icon: <img src={VproxyIcon} alt="Vproxy" width="32" height="32" />,
    platforms: ['Android', 'iOS', 'Windows', 'macOS', 'Linux'],
    price: '免费/30人民币',
    openSource: <ClosedSourceBadge />,
    websiteUrl: 'https://vproxy.5vnetwork.com',
    description: '新手友好'
  },
  {
    name: 'sing-box',
    icon: <img src="/img/sing-box.svg" alt="sing-box" width="32" height="32" />,
    platforms: ['Android', 'iOS', 'macOS', 'tvOS'],
    price: '免费',
    openSource: <OpenSourceBadge />,
    websiteUrl: 'https://sing-box.sagernet.org',
    description: 'sing-box官方客户端'
  },
  {
    name: 'Karing',
    icon: <img src="/img/karing.png" alt="karing" width="32" height="32" />,
    platforms: ['Android', 'iOS', 'Windows', 'macOS', 'Linux', 'tvOS'],
    price: '免费',
    openSource: <PartOpenSourceBadge />,
    websiteUrl: 'https://github.com/KaringX/karing',
    description: '基于sing-box内核'
  },
  {
    name: 'Shadowrocket',
    icon: <img src="/img/shadowrocket.jpg" alt="shadowrocket" width="32" height="32" />,
    platforms: ['iOS', 'macOS', 'tvOS'],
    price: '2.99美元',
    openSource: <ClosedSourceBadge />,
    websiteUrl: 'https://shadowlaunch.com/',
    description: '小火箭'
  },
  {
    name: 'Surge 5',
    icon: <img src="/img/surge.webp" alt="surge" width="32" height="32" />,
    platforms: ['iOS', 'macOS', 'tvOS'],
    price: '免费/49.99美元',
    openSource: <ClosedSourceBadge />,
    description: '知名苹果客户端',
    websiteUrl: 'https://nssurge.com/',
  },
  {
    name: 'v2rayN',
    icon: <img src="/img/v2rayN.png" alt="v2rayN" width="32" height="32" />,
    platforms: ['Windows', 'Linux', 'macOS'],
    price: '免费',
    description: '知名Windows客户端',
    openSource: <OpenSourceBadge />,
    websiteUrl: 'https://github.com/2dust/v2rayN',
  },
  {
    name: 'Clash Verge Rev',
    icon: <img src="/img/clash-verge.png" alt="clashverge" width="32" height="32" />,
    platforms: ['Windows', 'Linux', 'macOS'],
    price: '免费',
    description: '基于Mihomo(Clash)内核',
    openSource: <PartOpenSourceBadge />,
    websiteUrl: 'https://www.clashverge.dev/',
  },
  {
    name: 'FlClash',
    icon: <img src="/img/flclash.png" alt="flclash" width="32" height="32" />,
    platforms: ['Android', 'Windows', 'Linux', 'macOS'],
    price: '免费',
    description: '基于Mihomo(Clash)内核',
    openSource: <PartOpenSourceBadge />,
    websiteUrl: 'https://github.com/chen08209/FlClash',
  },
  {
    name: 'Hiddify',
    icon: <img src="/img/hiddify.png" alt="hiddify" width="32" height="32" />,
    platforms: ['Android', 'iOS', 'Windows', 'macOS', 'Linux'],
    price: '免费',
    openSource: <OpenSourceBadge />,
    description: '流行于伊朗',
    websiteUrl: 'https://hiddify.com',
  },
  {
    name: 'NekoBox for Android',
    icon: <img src="/img/nekobox.jpg" alt="nekobox" width="32" height="32" />,
    platforms: ['Android'],
    price: '免费',
    openSource: <OpenSourceBadge />,
    description: '基于sing-box内核',
    websiteUrl: 'https://matsuridayo.github.io/'
  }
];

const PlatformList: React.FC<{ platforms: string[] }> = ({ platforms }) => {
  return (
    <div className={styles.platformList}>
      {platforms.map((platform, index) => (
        <span key={index} className={styles.platformItem}>
          {platform}
        </span>
      ))}
    </div>
  );
};



const ProxyClientsTable: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.proxyTable}>
        <thead>
          <tr>
            <th className={styles.iconColumn}>图标</th>
            <th className={styles.nameColumn}>名称</th>
            <th className={styles.platformsColumn}>支持平台</th>
            <th className={styles.priceColumn}>价格</th>
            {/* <th className={styles.opensourceColumn}>开源状态</th> */}
          </tr>
        </thead>
        <tbody>
          {proxyClients.map((client, index) => (
            <tr key={index} className={styles.tableRow}>
              <td className={styles.iconCell}>
                <span className={styles.clientIcon}>
                  {client.icon}
                </span>
              </td>
              <td className={styles.nameCell}>
                <div className={styles.clientName}>
                  <a
                    href={client.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.clientLink}
                  >
                    {client.name}
                  </a>
                  {client.description && (
                    <div className={styles.clientDescription}>
                      {client.description}
                    </div>
                  )}
                </div>
              </td>
              <td className={styles.platformsCell}>
                <PlatformList platforms={client.platforms} />
              </td>
              <td className={styles.priceCell}>
                <span className={styles.price}>{client.price}</span>
              </td>
              {/* <td className={styles.opensourceCell}>
                {client.openSource}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProxyClientsTable;
