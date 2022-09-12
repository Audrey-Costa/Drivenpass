-- CreateTable
CREATE TABLE "SecretNotes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SecretNotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SecretNotes_title_userId_key" ON "SecretNotes"("title", "userId");

-- AddForeignKey
ALTER TABLE "SecretNotes" ADD CONSTRAINT "SecretNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
