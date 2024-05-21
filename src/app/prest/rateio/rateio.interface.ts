export interface Rateio {
	cc: string;
	tipo: string;
	codigo_documento: string;
	percentual_rateio: number;
	valor_rateios: number;
	cpf_cnpj: string;
	
}

export interface rateioAPI { //RootObject
	hasNext: boolean;
	items: Rateio[];

    
}