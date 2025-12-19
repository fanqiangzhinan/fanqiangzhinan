import React from 'react';
import { FaWindows, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdOutlineRouter } from 'react-icons/md';

interface VPNProvider {
  icon: React.ReactNode;
  name: string;
  url: string;
  description: string;
  platforms: string[];
  price: string;
}

const vpnProviders: VPNProvider[] = [
  {
    icon: <img src='/img/umi.svg' alt="Umi" width="40" height="40" />,
    name: 'UmiVPN',
    url: 'https://umivpn.com/',
    description: '安全，稳定，快速。开源内核。私有协议。',
    platforms: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
    price: '30元/月'
  },
  
];

const PlatformIcons: React.FC<{ platforms: string[] }> = ({ platforms }) => {
  const getIcon = (platform: string) => {
    const iconStyle = { fontSize: '18px', marginRight: '4px' };
    
    if (platform === 'Windows') return <FaWindows style={iconStyle} />;
    if (platform === 'macOS' || platform === 'iOS') return <FaApple style={iconStyle} />;
    if (platform === 'Linux') return <FaLinux style={iconStyle} />;
    if (platform === 'Android') return <FaAndroid style={iconStyle} />;
    if (platform === 'Router') return <MdOutlineRouter style={iconStyle} />;
    return null;
  };

  // Remove duplicates and prioritize Windows, Android, Apple at front
  const hasApple = platforms.includes('macOS') || platforms.includes('iOS');
  const otherPlatforms = platforms.filter(p => p !== 'iOS' && p !== 'macOS' && p !== 'Windows' && p !== 'Android');
  
  const prioritizedPlatforms = [];
  
  // Add priority platforms in order: Windows, Android, Apple
  if (platforms.includes('Windows')) prioritizedPlatforms.push('Windows');
  if (platforms.includes('Android')) prioritizedPlatforms.push('Android');
  if (hasApple) prioritizedPlatforms.push('Apple');
  
  // Add remaining platforms
  otherPlatforms.forEach(platform => {
    if (!prioritizedPlatforms.includes(platform)) {
      prioritizedPlatforms.push(platform);
    }
  });

  const finalPlatforms = prioritizedPlatforms;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {finalPlatforms.map((platform, index) => (
        <span key={index}>
          {platform === 'Apple' ? <FaApple style={{ fontSize: '18px', marginRight: '4px' }} /> : getIcon(platform)}
        </span>
      ))}
    </div>
  );
};

const VPNTable: React.FC = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th >图标</th>
            <th>名称</th>
            <th>简介</th>
            <th>支持平台</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          {vpnProviders.map((provider, index) => (
            <tr key={index}>
              <td>
                {provider.icon}
              </td>
              <td>
                <a href={provider.url} target="_blank" rel="noopener noreferrer">
                  {provider.name}
                </a>
              </td>
              <td>{provider.description}</td>
              <td>
                <PlatformIcons platforms={provider.platforms} />
              </td>
              <td>{provider.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VPNTable;