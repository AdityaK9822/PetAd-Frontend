import { http, HttpResponse } from "msw";

let escrowStatusValue = "PENDING";

export function setEscrowStatus(value: string) {
	escrowStatusValue = value;
}

export const escrowStatusHandler = http.get(
	"*/escrow/:id/status",
	({ params }) => {
		return HttpResponse.json({
			id: params.id,
			status: escrowStatusValue,
		});
	},
);
