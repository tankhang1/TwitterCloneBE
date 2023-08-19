-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "phoneNumber" TEXT,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT,
    "image" TEXT,
    "numberReply" INTEGER NOT NULL DEFAULT 0,
    "numberReTweet" INTEGER NOT NULL DEFAULT 0,
    "numberLike" INTEGER NOT NULL DEFAULT 0,
    "numberView" INTEGER NOT NULL DEFAULT 0,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
