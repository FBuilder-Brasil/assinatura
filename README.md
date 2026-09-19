# @fbuilder/assinatura

Selo de assinatura da FBuilder para o rodapé de projetos React: discreto em repouso, nítido no hover e no foco de teclado, com link para https://fbuilder.com.br/.

O selo vai embutido no JavaScript como data URI, então **nenhum projeto precisa copiar imagem para `public/`**. O estilo vem num CSS próprio, porque o Tailwind não lê classes dentro de `node_modules`.

## Instalação

```bash
npm i "@fbuilder/assinatura@github:FBuilder-Brasil/assinatura#v1.0.0"
```

Com pnpm ou yarn, troque `npm i` por `pnpm add` ou `yarn add`. A tag fixa a versão; para atualizar, aponte para a tag nova.

## Uso

```tsx
import { FBuilderSignature } from "@fbuilder/assinatura";
import "@fbuilder/assinatura/assinatura.css"; // uma vez por app (layout ou entry)

export function Footer() {
  return (
    <footer>
      {/* … */}
      <div className="bottom-bar">
        <p>© 2026 Empresa. Todos os direitos reservados.</p>
        <FBuilderSignature />
      </div>
    </footer>
  );
}
```

O componente não usa hooks, então funciona em Server Components (Next.js App Router), em Vite, Astro e afins.

## Props

| Prop | Padrão | Para quê |
|---|---|---|
| `className` | `""` | Posicionar o selo no layout (margem, alinhamento). |
| `height` | `32` | Altura do selo em px. A área clicável tem 44 px de altura. |
| `restingOpacity` | `0.7` | Opacidade em repouso. Em fundo claro, `0.8` costuma ficar melhor. |
| `href` | `https://fbuilder.com.br/` | Destino do link. |
| `label` | `Site criado pela FBuilder (abre em nova aba)` | Nome acessível do link. |

## Acessibilidade

- O link tem nome acessível próprio e a imagem é decorativa (`alt=""`), para o leitor de tela não repetir.
- Área de toque de 44 px de altura.
- A transição respeita `prefers-reduced-motion`.

## Publicar uma versão nova

```bash
npm version patch   # ou minor / major
git push --follow-tags
```

Depois, nos projetos, aponte a dependência para a tag nova.

## Trocar o selo

Hoje a arte é um PNG de 170 × 84 px embutido em `index.js` (cerca de 12 KB em base64). Se houver a versão em vetor (SVG), vale trocar: o peso cai para menos de 2 KB e o selo fica nítido em qualquer tamanho.
