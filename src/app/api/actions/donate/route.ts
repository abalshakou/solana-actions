
import {
  ActionGetResponse,
  ACTIONS_CORS_HEADERS,
  ActionPostRequest,
  createPostResponse,
  ActionPostResponse,
} from "@solana/actions";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

 const TREASURY_PUBKEY = new PublicKey(
    "CabQhVQrWZFuTom46PCsf6z1f5TRe3i7KQ92PuPedFTT",
);

export const GET = async (req: Request) => {
  const payload: ActionGetResponse = {
    icon: new URL("/solana.png", new URL(req.url).origin).toString(),
    label: "Help solana grow! ",
    description:
      "Solana is more than just a blockchain—it’s a movement. By supporting Solana, you’re helping to build a faster,  🚀🌱",
    title: "Help solana grow!",
    links: {
      actions: [
        {
          href: "/api/actions/donate?amount=0.1",
          label: "0.1 SOL",
          type: "transaction"
        },
        {
          href: "/api/actions/donate?amount=0.5",
          label: "0.5 SOL",
          type: "transaction"
        },
        {
          href: "/api/actions/donate?amount=1.0",
          label: "1.0 SOL",
          type: "transaction"
        },
      ],
    },
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const url = new URL(req.url);

    const body: ActionPostRequest = await req.json();

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      throw "The 'account' you provided isnt a valid pubkey. ";
    }

    let amount: number = 0.1;

    if (url.searchParams.has("amount")) {

      try {
        amount = parseFloat(url.searchParams.get("amount") || "0.1") || amount;
      } catch (err) {
        throw "Invalid 'amount'";
      }
    }

    const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL!;
    if (!SOLANA_RPC_URL) throw "Network doesnt work";
    const connection = new Connection(SOLANA_RPC_URL);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: account,
        lamports: amount * LAMPORTS_PER_SOL,
        toPubkey: TREASURY_PUBKEY,
      }),
    );
    transaction.feePayer = account;
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Thanks for the donation!",
        type: "transaction",
      },
    });

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    let message = "Unknown error";
    if (typeof err == "string") message = err;

    return Response.json(
      {
        message,
      },
      {
        headers: ACTIONS_CORS_HEADERS,
      },
    );
  }
};
