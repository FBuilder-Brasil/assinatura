import type { ReactElement } from "react";

export interface FBuilderSignatureProps {
  /** Classe extra para posicionar o selo no layout (o pacote não usa Tailwind). */
  className?: string;
  /** Altura do selo em px. Padrão: 32. */
  height?: number;
  /** Opacidade em repouso, de 0 a 1. Padrão: 0.7 (em fundo claro, 0.8 costuma ficar melhor). */
  restingOpacity?: number;
  /** Destino do link. Padrão: https://fbuilder.com.br/ */
  href?: string;
  /** Nome acessível do link, anunciado por leitores de tela. */
  label?: string;
  /**
   * Caminho de uma cópia da arte servida pelo próprio site, por exemplo
   * '/assinatura/fbuilder-by.png'. Sem isso, usa a arte embutida no pacote
   * (data URI), que dispensa arquivo mas pesa ~12 KB em cada página.
   */
  src?: string;
}

/** Selo "By | F" da FBuilder para o rodapé. Sem hooks: funciona em Server Components. */
export declare function FBuilderSignature(props?: FBuilderSignatureProps): ReactElement;

export default FBuilderSignature;
