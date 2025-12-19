---
sidebar_position: 1
title: 谷歌云VPS自建节点教程 - Vproxy快捷部署
description: 利用Vproxy快捷部署，一键在谷歌云VPS上部署翻墙节点并导入客户端。谷歌云提供三个月免费试用。
keywords: [谷歌云, GCP, Vproxy, 自建节点, 谷歌云VPS, 翻墙节点, Vproxy部署, GCP教程]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vproxy快捷部署（谷歌云）

利用Vproxy快捷部署，一键在谷歌云VPS上部署节点，并导入客户端。

:::tip

谷歌云提供三个月的免费试用，试用期间不会对信用卡进行扣款。可以放心试用。

:::


### 前提条件

-   谷歌云账号

### 视频教程

<iframe width="800" height="450" src="https://www.youtube.com/embed/ce7ew_p7XlU" title="谷歌云教程" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
<br /><br />

### 视频中用到的命令

<Tabs>
  <TabItem value="windows" label="Windows" default>
    生成SSH密钥
    ```bash
    mkdir .ssh & ssh-keygen -t rsa -f .ssh\gcp -N "" -C cat
    ```
    复制公钥

    ```bash
    type .ssh\gcp.pub | clip
    ```

    复制密钥

    ```bash
    type .ssh\gcp | clip
    ```
    
  </TabItem>
  <TabItem value="macOS" label="MacOS">
        生成SSH密钥
    ```bash
    mkdir .ssh; ssh-keygen -t rsa -f ~/.ssh/gcp -C cat -N ""
    ```
    复制公钥

    ```bash
    cat .ssh/gcp.pub | pbcopy
    ```

    复制密钥

    ```bash
    cat .ssh/gcp | pbcopy
    ```
  </TabItem>
</Tabs>

