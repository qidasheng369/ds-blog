---
id: mdx-use
slug: /mdx-use
title: MDX常见用法
authors: dasheng
---
# mdx常见用法

[Markdown Features](https://docusaurus.io/docs/markdown-features)

## MD

<Tabs>
  <TabItem value="show" label="效果" default>

  ```md title="docs/folder/doc1.md"
  I am referencing a [document](doc2.mdx).

  Reference to another [document in a subfolder](subfolder/doc3.mdx).

  [Relative document](../otherFolder/doc4.mdx) referencing works as well.
  ```
  </TabItem>

  <TabItem value="code" label="Code">

  ```js
  |```md title="docs/folder/doc1.md"
  I am referencing a [document](doc2.mdx).

  Reference to another [document in a subfolder](subfolder/doc3.mdx).

  [Relative document](../otherFolder/doc4.mdx) referencing works as well.
  |```
  ```

  :::danger
  “|” 是占位符，使用时，请删除！
  :::

  </TabItem>
</Tabs>





## Tabs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
  <TabItem value="code" label="Code">
    
  ```jsx
  <Tabs>
    <TabItem value="apple" label="Apple" default>
      This is an apple 🍎
    </TabItem>
    <TabItem value="orange" label="Orange">
      This is an orange 🍊
    </TabItem>
    <TabItem value="banana" label="Banana">
      This is a banana 🍌
    </TabItem>
  </Tabs>
  ```
  </TabItem>
</Tabs>

## Details

<Tabs>
  <TabItem value="show" label="效果" default>
    <details>
      <summary>Toggle me!</summary>

      This is the detailed content

      ```js
      console.log("Markdown features including the code block are available");
      ```

      You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)
      <details>
        <summary>Nested toggle! Some surprise inside...</summary>

        😲😲😲😲😲
      </details>
    </details>


  </TabItem>
  <TabItem value="code" label="Code">
    ````md title="Example details code"
    <details>
      <summary>Toggle me!</summary>

      This is the detailed content

      ```js
      console.log("Markdown features including the code block are available");
      ```

      You can use Markdown here including **bold** and _italic_ text, and [inline link](https://docusaurus.io)
      <details>
        <summary>Nested toggle! Some surprise inside...</summary>

        😲😲😲😲😲
      </details>
    </details>
    ````
  </TabItem>
</Tabs>

## Mermaid

<Tabs>
  <TabItem value="show" label="效果" default>
    ```mermaid
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```
  </TabItem>
  <TabItem value="code" label="Code">

    ````md title="Example Mermaid code"
    ```mermaid
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```
    ````
  </TabItem>

</Tabs>

## Admonitions

<Tabs>
  <TabItem value="show" label="效果" default>
  :::note
  Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
  :::

  :::tip
  Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
  :::

  :::info
  Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
  :::

  :::warning
  Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
  :::

  :::danger
  Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
  :::
  </TabItem>

  <TabItem value="code" label="Code">
    ```jsx
    :::note
    Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
    :::

    :::tip
    Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
    :::

    :::info
    Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
    :::

    :::warning
    Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
    :::

    :::danger
    Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
    :::
    ```
  </TabItem>
</Tabs>
